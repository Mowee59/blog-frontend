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

// Make them available globally in the tests
global.serverMock = serverMock;
global.clientMock = clientMock;

// Reset all mocks after each test
afterEach(() => {
  serverMock.reset();
  clientMock.reset();
});

/**
 * Hide consle logs if tests are successfull
 */

 // Store the original console methods
 const originalConsole = { ...console };

 // Override console methods
 beforeAll(() => {
   console.log = jest.fn();
   console.warn = jest.fn();
   console.error = jest.fn();
 });

 // Restore the original console methods after all tests
 afterAll(() => {
   console.log = originalConsole.log;
   console.warn = originalConsole.warn;
   console.error = originalConsole.error;
 });