package store

import (
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"
)

type Organization struct {
	Model
	Token       string
	Description string
}

func (str *Store) CreateOrganization(org *Organization, trx *sqlx.Tx) (int, error) {
	stmt, err := trx.Prepare("insert into organizations (token, description) values ($1, $2) returning id")
	if err != nil {
		return 0, errors.Wrap(err, "error preparing organizations insert statement")
	}
	var id int
	if err := stmt.QueryRow(org.Token, org.Description).Scan(&id); err != nil {
		return 0, errors.Wrap(err, "error executing organizations insert statement")
	}
	return id, nil
}

func (str *Store) FindOrganizations(trx *sqlx.Tx) ([]*Organization, error) {
	rows, err := trx.Queryx("select * from organizations where not deleted")
	if err != nil {
		return nil, errors.Wrap(err, "error finding organizations")
	}
	var orgs []*Organization
	for rows.Next() {
		org := &Organization{}
		if err := rows.StructScan(&org); err != nil {
			return nil, errors.Wrap(err, "error scanning organization")
		}
		orgs = append(orgs, org)
	}
	return orgs, nil
}

func (str *Store) FindOrganizationByToken(token string, trx *sqlx.Tx) (*Organization, error) {
	org := &Organization{}
	if err := trx.QueryRowx("select * from organizations where token = $1 and not deleted", token).StructScan(org); err != nil {
		return nil, errors.Wrap(err, "error selecting frontend by token")
	}
	return org, nil
}

type OrganizationMembership struct {
	Token       string
	Description string
	Admin       bool
}

func (str *Store) FindOrganizationsForAccount(acctId int, trx *sqlx.Tx) ([]*OrganizationMembership, error) {
	sql := "select organizations.token, organizations.description, organization_members.admin from organizations, organization_members " +
		"where organization_members.account_id = $1 and organization_members.organization_id = organizations.id and not organizations.deleted"
	rows, err := trx.Queryx(sql, acctId)
	if err != nil {
		return nil, errors.Wrap(err, "error querying organization memberships")
	}
	var oms []*OrganizationMembership
	for rows.Next() {
		om := &OrganizationMembership{}
		if err := rows.StructScan(&om); err != nil {
			return nil, errors.Wrap(err, "error scanning organization membership")
		}
		oms = append(oms, om)
	}
	return oms, nil

}

func (str *Store) DeleteOrganization(id int, trx *sqlx.Tx) error {
	stmt, err := trx.Prepare("update organizations set updated_at = current_timestamp, deleted = true where id = $1")
	if err != nil {
		return errors.Wrap(err, "error preparing organizations delete statement")
	}
	_, err = stmt.Exec(id)
	if err != nil {
		return errors.Wrap(err, "error executing organizations delete statement")
	}
	return nil
}
