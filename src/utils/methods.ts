import axios from "axios";
export const fetchCharacterByName = async (
  character: string
): Promise<any[]> => {
  const { data } = await axios.get(
    `https://www.breakingbadapi.com/api/characters?name=${character}`
  );
  return new Promise((resolve) => resolve(data));
};
export const doesDataExist = (data: any) => {
  if (data.length > 0) {
    return true;
  } else {
    return false;
  }
};
