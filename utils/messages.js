class Messages {
    static success = {
        USER_CREATED: "User created successfully.",
        LOGIN_SUCCESS: "Login successful.",
        DATA_FETCHED: "Data fetched successfully.",
    }
   static error = {
        INVALID_CREDENTIALS: "Invalid credentials provided.",
        USER_NOT_FOUND: "User not found.",
        SERVER_ERROR: "An internal server error occurred.",
        VALIDATION_ERROR: "Request validation failed.",
    }
    static info = {
        PASSWORD_MISMATCH: "Passwords do not match.",
        NO_DATA: "No data available.",
    }
    static common = {
        SERVER_LISTENING: "Server Listening on Port",
        DB_CONNECTING: "Connecting to Database...",
        DB_CONNECTED: "Connected to the Database"
    }
}


export default Messages;