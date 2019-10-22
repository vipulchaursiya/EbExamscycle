//  $group:{
//        _id:'$name',
//        cycleNumber: {$addToSet: '$cycle.cycleNumber'},
//        year: {$addToSet: '$cycle.year'},
//        registration: {$addToSet: '$cycle.examdates.registration.start._date',
//                        $addToSet: '$cycle.examdates.registration.end._date'},

//        admitCard: {$addToSet: '$cycle.examdates.admitCard.start._date',
//                     $addToSet: '$cycle.examdates.admitCard.end._date'},

//        examDate: {$addToSet: '$cycle.examdates.examDate.start._date',
//                   $addToSet: '$cycle.examdates.examDate.end._date'},

//        writtenResultDate: {$addToSet: '$cycle.examdates.writtenResultDate.start._date',
//                            $addToSet: '$cycle.examdates.writtenResultDate.end._date'},

//        counselling: {$addToSet: '$cycle.examdates.counselling.start._date',
//                     $addToSet: '$cycle.examdates.counselling.end._date'},

//        interview: {$addToSet: '$cycle.examdates.interview.start._date',
//                    $addToSet: '$cycle.examdates.interview.end._date'},
//         }
