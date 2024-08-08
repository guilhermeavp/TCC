const API_URL = process.env.API_URL;

export const API = async (path: String, method: string, data?: any) => {
  const result =  await fetch(`${API_URL}${path}`,{
      method: method ? method : 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data? JSON.stringify({...data}): undefined,
  })
  const dataReturn = result.json()
  return dataReturn;
};