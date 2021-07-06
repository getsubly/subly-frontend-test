import type { NextApiRequest, NextApiResponse } from "next";
import { Medium, MediumStatus } from "../../models/media";

const MOCKED_MEDIA: Medium[] = [
  {
    id: 1,
    name: "How to use to Subly",
    cover: "/media/1.jpg",
    languages: ["en"],
    status: MediumStatus.Ready,
    createdAt: new Date("2021-05-01 12:00"),
    updatedAt: new Date("2021-05-01 12:00"),
  },
  {
    id: 2,
    name: "This has many languages",
    cover: "/media/2.jpg",
    languages: ["en", "nl", "cz"],
    status: MediumStatus.Ready,
    createdAt: new Date("2021-06-02 12:21"),
    updatedAt: new Date("2021-06-03 21:12"),
  },
  {
    id: 3,
    name: "This has an error",
    cover: "/media/3.png",
    languages: ["en"],
    status: MediumStatus.Error,
    errorMessage: "Failed while transcribing",
    createdAt: new Date("2021-07-04 00:11"),
    updatedAt: new Date("2021-07-04 00:11"),
  },
  {
    id: 4,
    name: "This is transcribing",
    cover: "/media/4.png",
    languages: ["en"],
    status: MediumStatus.Transcribing,
    createdAt: new Date("2021-07-04 00:15"),
    updatedAt: new Date("2021-07-04 00:17"),
  },
];

type Response = {
  media: Medium[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ media: MOCKED_MEDIA });
}
