interface DeveloperExcuse {
  data: string;
}

export const getDeveloperExcuse = async (): Promise<string> => {
  return fetch("https://api.tabliss.io/v1/developer-excuses")
    .then(response => response.json() as Promise<DeveloperExcuse>)
    .then(json => json.data)
    .catch(() => "We've run out of inspiration");
}