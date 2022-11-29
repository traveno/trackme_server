module.exports = mongoose => {
    const User = mongoose.model(
      'users',
      mongoose.Schema(
        {
          username: String,
          realname: String,
          password: String,
          pin: Number,
          height: Number,
          weight: Number
        },
        { timestamps: true }
      )
    );
  
    return User;
  };