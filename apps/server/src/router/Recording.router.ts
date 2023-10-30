import { Router } from "express";
import { IGenericRequestBody, IGenericResponse } from "../utils";
import { RecordingModels, RecordingController } from "@sniffer/domain";
const recordingRouter = Router();

recordingRouter.post(
  "/generate-url",
  async (
    req: IGenericRequestBody<RecordingModels.CreateRecording.IRequestDTO>,
    res: IGenericResponse<RecordingModels.GenerateUrl.IResponseDTO>
  ) => {
    const recordingController = new RecordingController();
    const recording = await recordingController.generateUrl({
      networkRecording: req.body.networkRecording,
      screenRecording: req.body.screenRecording,
    });

    res.json(recording);
  }
);

export default recordingRouter;
