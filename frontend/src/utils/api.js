import axios from "axios";

// sign up function
export async function signUp(formData) {
  const { data } = await axios.post(
    "http://localhost:8000/user/signup",
    formData
  );
  return data;
}

// create a comment
export async function createComment(formData) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.post(
    "http://localhost:8000/comment",
    formData,
    config
  );
  return data;
}

//show comment
export async function showComment() {
  const { data } = await axios.get("http://localhost:8000/comment");
  return data;
}

//Log in to User Account
export async function loginToAccount(formData) {
  const { data } = await axios.post(
    "http://localhost:8000/user/login",
    formData
  );
  return data;
}

// update user account
export async function updateUser(userId, formData) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.put(
    `http://localhost:8000/user/${userId}`,
    formData,
    config
  );
  return data;
}

// delet user account
export async function deleteUser(userId) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  await axios.delete(`http://localhost:8000/user/${userId}`, config);
}

//getUser
export async function getUser(userid) {
  const { data } = await axios.get(`http://localhost:8000/user/${userid}`);
  return data;
}
