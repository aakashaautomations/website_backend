import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Enquiry = sequelize.define(
  "Enquiry",
  {
     id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    companyName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    serviceType: {
      type: DataTypes.ENUM(
        "ai-agent",
        "text-to-speech",
        "voice-bot",
        "chatbot",
        "custom-ai-solution",
        "other"
      ),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "resolved",
        "cancelled",
        "in-progress"
       
      ),
      defaultValue: "pending",
    },

    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "enquiries",
    timestamps: true,
  }
);

export default Enquiry;