import { RecordingModels } from "../models/IRecording";

export interface IRecordingRepository {
  createRecording(
    params: RecordingModels.CreateRecording.IRepositoryPayload
  ): Promise<RecordingModels.CreateRecording.IResponseDTO>;
}
