
const StudentDashboard = () => {

    const categories=[
        {
            title:'average grade',
            emoji:'📊',
            progress:'88%'
        },
        {
            title:'Courses',
            emoji:'📚',
            progress:3
        },
        {
            title:'study hours',
            emoji:'⏱️',
            progress:'45h'
        },
        {
            title:'assignments',
            emoji:'✍️',
            progress:12
        }
    ]

    const courses=[
        {
            title:'react fundamentals',
            progress:75,
            nextCourse:'components & props',
            name:'sarah wilson'
        },
        {
            title:'Javascript advanced',
            progress:45,
            nextCourse:'async/Await',
            name:'mike johnson'
        },
        {
            title:'UI/UX Design',
            progress:90,
            nextCourse:'color theory',
            name:'emily chen'
        },
    ]
    const upcomingAssignments=[
        {
            title:'Build a todo app',
            desc:'react fundamentals',
            progress:'pending',
            time:'Due 2025-12-03'
        },
        {
            title:'API integration',
            desc:'javascript advanced',
            progress:'completed',
            time:'Due 2025-11-22'
        },
        {
            title:'design system',
            desc:'UI/UX Design',
            progress:'in-progress',
            time:'Due 2025-12-05'
        },
    ]
    const anouncements=[
        {
            title:'new course available',
            desc:'check out our new typescript course',
            time:2
        },
        {
            title:'maintenance notice',
            desc:'platform updates scheduled for tonight',
            time:5
        }
    ]

    const getCourseProgress=(progress)=>{
        switch(progress){
            case 75:
                return 'absolute rounded-lg w-60 h-2 bg-green-500'
            case 45:
                return 'absolute rounded-lg w-35 h-2 bg-green-500'
            case 90:
                return 'absolute rounded-lg w-70 h-2 bg-green-500'
        }
    }
    const getCourseFeedback=(progress)=>{
        switch(progress){
            case 'pending':
                return 'bg-rose-100 text-rose-600'
            case 'completed':
                return 'bg-green-100 text-green-600'
            case 'in-progress':
                return 'bg-yellow-100 text-yellow-600'
        }
    }
  return (
    <div className="w-full bg-gray-50 min-h-screen">
            <div className="max-w-5xl w-full mx-auto p-4">
        <div className="bg-white shadow-md p-4 flex items-center justify-between rounded-lg mb-4">
            <div>
                <h1 className="text-2xl font-semibold">Welcome back,Student!</h1>
                <p className="text-sm text-gray-600">here is what is happening with your courses today.</p>
            </div>
            <div className="hidden md:flex items-center ">
                <span className="relative pr-4">🔔</span>
                <span className="absolute w-2 h-2 rounded-full bg-red-600 right-[16%] top-[8%]"></span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex justify-center items-center">J</div>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                categories.map(category => (
                    <div className="flex gap-2 bg-white shadow-md p-4 rounded-lg">
                        <span>{category.emoji}</span>
                        <div>
                            <h3 className="capitalize">{category.title}</h3>
                            <p className="font-bold text-xl ">{category.progress}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="bg-white md:flex flex-col gap-4 mt-6 p-4 rounded-lg shadow-md ">
                <h1 className="text-xl font-semibold">Course Progress</h1>
                {
                    courses.map(course => (
                        <div className="mt-4 bg-gray-100 rounded-lg px-3 py-2">
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg font-semibold capitalize">{course.title}</h2>
                                <span className="text-sm text-gray-600">{course.progress}%</span>
                            </div>
                            <div className="relative w-full h-2 bg-gray-200 rounded-lg mb-2">
                                <div className={`${getCourseProgress(course.progress)}`}></div>
                            </div>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <span>Next: {course.nextCourse}</span>
                                <span>{course.name}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div>
                            <div className="bg-white mt-4 p-4 rounded-lg shadow-md ">
                <h1 className="text-xl font-semibold">upcoming assignments</h1>
                {
                    upcomingAssignments.map(upcomingAssignment => (
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold">{upcomingAssignment.title}</h2>
                                <span className={`${getCourseFeedback(upcomingAssignment.progress)} px-2 py-1 rounded-lg`}>{upcomingAssignment.progress}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600 capitalize">{upcomingAssignment.desc}</span>
                                <span className="text-sm text-gray-600 capitalize">{upcomingAssignment.time}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="bg-white mt-4 p-4 rounded-lg shadow-md ">
                <h1 className="text-xl font-semibold">Announcements</h1>
                {
                    anouncements.map(anouncement => (
                        <div className="mt-4">
                            <div className="flex flex-col border-l-4 border-blue-500 pl-2">
                                <h2 className="text-xl font-semibold capitalize">{anouncement.title}</h2>
                                <span className="text-sm text-gray-600 capitalize">{anouncement.desc}</span>
                                <span className="text-sm text-gray-600">{anouncement.time} hours ago</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>

        </div>
      
    </div>
    </div>

  )
}

export default StudentDashboard
