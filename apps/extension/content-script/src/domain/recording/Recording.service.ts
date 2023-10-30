import axios from "axios";
import { IRecordingService } from "./IRecording.service";
import {
  MethodType,
  RecordingController,
  RecordingModels,
  RecordingRepository,
} from "@sniffer/domain";

class RecordingService implements IRecordingService {
  generateUrl: MethodType<RecordingController["generateUrl"]> = async (
    params
  ) => {
    const res = await axios.post<RecordingModels.GenerateUrl.IResponseDTO>(
      "http://localhost:4000/recording/generate-url",
      params
    );

    return res.data;
  };
}

const recordingService = new RecordingService();

export { recordingService, RecordingService };
