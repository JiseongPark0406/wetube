export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const join = (req, res) => res.send("Join User");
export const login = (req, res) => res.send("Login User");
export const personal = (req, res) => res.send(`Hi ${req.params.id}`)