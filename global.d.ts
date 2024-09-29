import MockAdapter from 'axios-mock-adapter';

declare global {
  var serverMock: MockAdapter;
  var clientMock: MockAdapter;
}