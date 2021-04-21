import unittest
from app import verify_headers

KEY_HEADERS = 'headers'
KEY_EXPECTED = 'expected'

TOKEN_ID = '28278s9achjkshdfba8df9au9f8dfdjk'

class VerifyHeadersTestCase(unittest.TestCase):
    def setUp(self):
        self.success_test_params = [{
            KEY_HEADERS: {
                'Authorization': 'Bearer ' + TOKEN_ID,
                'Content-Type': 'application/json',
            },
            KEY_EXPECTED: {
                'success': True
            }
        }, {
            KEY_HEADERS: {
                'Authorization': TOKEN_ID,
                'Content-Type': 'application/json',
            },
            KEY_EXPECTED: {
                'success': False,
                'message': 'Missing Bearer in Authorization header.'
            }
        }]
        self.failure_test_params = [{
            KEY_HEADERS: {
                'Author': 'Bearer ' + TOKEN_ID,
                'Content-Type': 'application/json',
            },
            KEY_EXPECTED: {
                'success': True
            }
        }, {
            KEY_HEADERS: {
                'Content-Type': 'application/json',
            },
            KEY_EXPECTED: {
                'success': False,
                'message': 'Missing Bearer in Authorization header.'
            }
        }]
    def test_success(self):
        for test in self.success_test_params:
            headers = test[KEY_HEADERS]
            
            actual_result = verify_headers(headers)
            expected_result = test[KEY_EXPECTED]
            
            self.assertEqual(actual_result, expected_result)
    def test_failure(self):
        for test in self.failure_test_params:
            headers = test[KEY_HEADERS]
            
            actual_result = verify_headers(headers)
            expected_result = test[KEY_EXPECTED]
            
            self.assertNotEqual(actual_result, expected_result)

if __name__ == '__main__':
    unittest.main()
