const UserModel = require("../userModel/userModel");
const ClassMemberModel = require("./classMemberModel.js");
const RoomModel = require("./roomModel");

class Room {
  async createRoom(roomInfo, instructorData, subjectInfo) {
    roomInfo = {
      ...roomInfo,
      instructorID: instructorData.userID,
      userId: instructorData.id,
      subjectId: subjectInfo.id,
    };
    await RoomModel.create(roomInfo);

    //Get room info
    const roomData = await RoomModel.findOne({
      where: {
        roonName: roomInfo.roomName,
        instructorID: roomInfo.instructorID,
        schedStart: roomInfo.schedStart,
        schedEnd: roomInfo.schedEnd,
      },
    });
    // Add the creator to Classmember
    await this.addClassMember(instructorData, roomData.dataValues);
  }

  async getRoomsByUser(userId) {
    const roomResult = await UserModel.findOne({
      attributes: ["id", "userID"],
      include: RoomModel,
      where: { id: userId },
    });
    return roomResult;
  }

  async addClassMember(userData, roomInfo) {
    await ClassMemberModel.create({
      memberID: userData.userID,
      role: userData.role,
      userId: userData.id,
      roomId: roomInfo.id,
    });
  }
}

module.exports = Room;