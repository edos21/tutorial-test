module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        video_url: {
            type: Sequelize.STRING,
            trim: true
        },
        description: {
            type: Sequelize.STRING
        },
        published_status: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        delete_at: {
            type: Sequelize.DATE
        }
    });
    return Tutorial;
};