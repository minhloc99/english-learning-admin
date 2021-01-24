import { Participant, TemplateCourse, TemplateLesson } from "../model/ViewModels";

export const templateCourseData = {
    "1": TemplateCourse.create({
        id: "1",
        type: "TOEIC",
        name: "TOEIC 400",
        description: "Trong vòng 3 tháng sẽ có thể nói cơ bản và đạt TOEIC khoảng 400 điểm"
    })
};

export const templateLessonData = {
    "1": TemplateLesson.create({
        id: "1",
        courseId: "1",
        name: "Tổng quan về bảng IPA",
        description: "Tìm hiểu về tầm quan trọng của bảng IPA và cấu trúc bảng IPA"
    }),
    "2": TemplateLesson.create({
        id: "2",
        courseId: "1",
        name: "Nguyên âm",
        description: "Các nguyên âm trong tiếng Anh"
    }),
    "3": TemplateLesson.create({
        id: "3",
        courseId: "1",
        name: "Nguyên âm ghép",
        description: "Các nguyên âm ghép từ các nguyên âm cơ bản"
    }),
    "4": TemplateLesson.create({
        id: "4",
        courseId: "1",
        name: "Phụ âm",
        description: "Các phụ âm trong tiếng Anh"
    }),
    "5": TemplateLesson.create({
        id: "5",
        courseId: "1",
        name: "Phụ âm ghép",
        description: "Các phụ âm ghép từ các phụ âm cơ bản"
    })
};

export const participantData = {
    "1": Participant.create({
        id: "1",
        name: "Luke Tran",
        firstName: "Luke",
        lastName: "Tran",
        type: "STUDENT"
    }),
    "2": Participant.create({
        id: "2",
        name: "Elon Musk",
        firstName: "Elon",
        lastName: "Musk",
        type: "STUDENT"
    }),
    "3": Participant.create({
        id: "3",
        name: "Evan You",
        firstName: "Evan",
        lastName: "You",
        type: "STUDENT"
    }),
    "4": Participant.create({
        id: "4",
        name: "Will Smith",
        firstName: "Will",
        lastName: "Smith",
        type: "TEACHER"
    }),
    "5": Participant.create({
        id: "5",
        name: "Tom Hank",
        firstName: "Tom",
        lastName: "Hank",
        type: "TEACHING_ASSISTANT"
    })
};