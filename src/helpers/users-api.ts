export type LoginDataType = {
  username: string;
  password: string;
};

export type LoginResponseType = {
  access_token: string;
  token_type: string;
};

export const login = async (data: LoginDataType) => {
  const formData = new FormData();

  formData.append("username", data.username);
  formData.append("password", data.password);

  const response = await fetch("http://localhost/api/v1/users/token", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Произошла ошибка");
  }

  return await response.json();
};

export const getCurrentUser = async (token) => {
  const response = await fetch("http://localhost/api/v1/users/me", {
    method: "GET",
    headers: {
      Authorization: 'Bearer ' + token,
    }
  })

  if (!response.ok) {
    throw new Error("Произошла ошибка");
  }

  return await response.json();
}
