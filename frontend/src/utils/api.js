import axios from "axios";

// sign up function
export async function signUp(formData) {
  const { data } = await axios.post(
    "user/signup",
    formData
  );
  return data;
}

//Log in to User Account
export async function loginToAccount(formData) {
  const { data } = await axios.post(
    "user/login",
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
    "comment",
    formData,
    config
  );
  return data;
}

//show comment
export async function showComment() {
  const { data } = await axios.get("comment");
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
    `user/${userId}`,
    formData,
    config
  );
  return data
}

// delet user account
export async function deleteUser(userId) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  await axios.delete(`user/${userId}`, config);
}

//getUser
export async function getUser(userid) {
  const { data } = await axios.get(`user/${userid}`);
  return data;
}
