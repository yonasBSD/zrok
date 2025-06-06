# coding: utf-8

"""
    zrok

    zrok client access

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict
from typing import Any, ClassVar, Dict, List, Optional
from zrok_api.models.remote_status200_response_accesses_inner import RemoteStatus200ResponseAccessesInner
from zrok_api.models.remote_status200_response_shares_inner import RemoteStatus200ResponseSharesInner
from typing import Optional, Set
from typing_extensions import Self

class RemoteStatus200Response(BaseModel):
    """
    RemoteStatus200Response
    """ # noqa: E501
    shares: Optional[List[RemoteStatus200ResponseSharesInner]] = None
    accesses: Optional[List[RemoteStatus200ResponseAccessesInner]] = None
    __properties: ClassVar[List[str]] = ["shares", "accesses"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of RemoteStatus200Response from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in shares (list)
        _items = []
        if self.shares:
            for _item_shares in self.shares:
                if _item_shares:
                    _items.append(_item_shares.to_dict())
            _dict['shares'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in accesses (list)
        _items = []
        if self.accesses:
            for _item_accesses in self.accesses:
                if _item_accesses:
                    _items.append(_item_accesses.to_dict())
            _dict['accesses'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of RemoteStatus200Response from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "shares": [RemoteStatus200ResponseSharesInner.from_dict(_item) for _item in obj["shares"]] if obj.get("shares") is not None else None,
            "accesses": [RemoteStatus200ResponseAccessesInner.from_dict(_item) for _item in obj["accesses"]] if obj.get("accesses") is not None else None
        })
        return _obj


