import { RecordingModels } from "../models/IRecording";
import { IRecordingRepository } from "../repository/IRecording.repository";

export interface IRecordingController {
  recordingRepository: IRecordingRepository;

  createRecording(
    params: RecordingModels.CreateRecording.IRequestDTO
  ): Promise<RecordingModels.CreateRecording.IResponseDTO>;

  generateUrl(
    params: RecordingModels.GenerateUrl.IRepositoryPayload
  ): Promise<RecordingModels.GenerateUrl.IResponseDTO>;
}
