import { appDataSource, AWS } from "@sniffer/infrastructure";
import { Recording } from "@sniffer/infrastructure/database/entities/Recording";
import { IRecordingRepository } from "./IRecording.repository";
import { MethodType } from "../../utils";

export class RecordingRepository implements IRecordingRepository {
  createRecording: MethodType<IRecordingRepository["createRecording"]> = async (
    params
  ) => {
    const s3Result = await AWS.uploadBase64VideoToS3(params.screenRecording);
    const recordingRepository = appDataSource.getRepository(Recording);
    if (!s3Result?.url) throw new Error("Upload to S3 failed");
    const recording = recordingRepository.create({
      networkRecording: params.networkRecording,
      screenRecording: s3Result?.url,
    });
    const result = await recordingRepository.save(recording);
    return result;
  };
}
