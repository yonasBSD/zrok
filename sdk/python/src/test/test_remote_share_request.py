# coding: utf-8

"""
    zrok

    zrok client access

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from zrok_api.models.remote_share_request import RemoteShareRequest

class TestRemoteShareRequest(unittest.TestCase):
    """RemoteShareRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RemoteShareRequest:
        """Test RemoteShareRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RemoteShareRequest`
        """
        model = RemoteShareRequest()
        if include_optional:
            return RemoteShareRequest(
                env_zid = '',
                share_mode = 'public',
                token = '',
                target = '',
                basic_auth = [
                    ''
                    ],
                frontend_selection = [
                    ''
                    ],
                backend_mode = 'proxy',
                insecure = True,
                oauth_provider = '',
                oauth_email_address_patterns = [
                    ''
                    ],
                oauth_check_interval = '',
                open = True,
                access_grants = [
                    ''
                    ]
            )
        else:
            return RemoteShareRequest(
        )
        """

    def testRemoteShareRequest(self):
        """Test RemoteShareRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
