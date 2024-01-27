export const authentified = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
