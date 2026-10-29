# Qwitter Tests

This directory contains unit tests for the Qwitter application.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Test Coverage

The current test suite includes:

### Data Validation Tests
- Validates qweet content length (max 280 characters)
- Verifies qweet object structure (content, date, liked fields)

### Qweet Management Tests
- Adding new qweets to the array
- Toggling the liked status of qweets
- Removing qweets from the array
- Finding qweets by ID

### Date Formatting Tests
- Handling timestamp dates
- Calculating time differences

### Content Validation Tests
- Rejecting empty or whitespace-only qweets
- Accepting valid qweet content
- Preserving newlines in multi-line content

## Test Framework

The tests use [Jest](https://jestjs.io/) as the testing framework.

## Future Enhancements

- Add Vue component tests with proper Babel configuration
- Add integration tests for Firebase interactions
- Add E2E tests for user workflows
- Increase code coverage targets

## Notes

The current tests focus on core business logic and data manipulation without requiring complex Vue component mounting or Firebase mocking. This approach provides reliable, fast tests that validate the essential functionality of the application.
