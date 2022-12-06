module.exports = mongoose => {
    const Stat = mongoose.model(
        'stats',
        mongoose.Schema(
            {
                userGUID: String,
                workout: String,
                reps: Number,
                weight: Number
            },
            { timestamps: true }
        )
    );
  
    return Stat;
};