export const makeMockFetch = () => {
  global.fetch = jest.fn((url) => 
    Promise.resolve({
      json: async () => {
        if (url === 'minhaUrl') {
          return { data: 'data' };
        }
        if (url === 'minhaUrl2') {
          return { data: 'data2' };
        }
      }
    })
  );
}