import { IRecordingController, MethodType } from "@sniffer/domain";

export interface IRecordingService {
  generateUrl: MethodType<IRecordingController["generateUrl"]>;
}
