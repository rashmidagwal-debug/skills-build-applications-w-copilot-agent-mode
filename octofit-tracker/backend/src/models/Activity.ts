import mongoose, { Document, Schema } from 'mongoose';

interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  activityType: 'running' | 'walking' | 'strength_training' | 'cycling' | 'swimming';
  duration: number;
  distance?: number;
  caloriesBurned: number;
  description: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    activityType: {
      type: String,
      enum: ['running', 'walking', 'strength_training', 'cycling', 'swimming'],
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    distance: {
      type: Number
    },
    caloriesBurned: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const Activity = mongoose.model<IActivity>('Activity', activitySchema);

export default Activity;
export type { IActivity };
