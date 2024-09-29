import '@testing-library/jest-dom/extend-expect'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { apiServer, apiClient } from '@/libs/axiosConfig';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}));

// Mock axios
// Create mock adapters for both apiServer and apiClient
const serverMock = new MockAdapter(apiServer);
const clientMock = new MockAdapter(apiClient);

// Make them available globally in your tests
global.serverMock = serverMock;
global.clientMock = clientMock;

// Reset all mocks after each test
afterEach(() => {
  serverMock.reset();
  clientMock.reset();
});