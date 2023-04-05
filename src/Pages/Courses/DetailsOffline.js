import React from 'react';
import './CourseDetails.css'

const DetailsOffline = ({ allCourses }) => {
    return (
        <div className=''>
            {
                allCourses.map(offline =>
                    <div class="relative overflow-x-auto">
                        <table class="lg:w-full sm:w-20 text-sm text-left text-gray-500 dark:text-gray-400">

                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-10 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                                        Mode:
                                    </th>


                                    <td class="px-6 py-10 text-2xl">
                                        Offline
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-10 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                                        Course Duration:
                                    </th>


                                    <td class="px-6 py-10 text-2xl">
                                        {offline.OfflineCourseDuration}
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-10 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                                        Enrolled:
                                    </th>


                                    <td class="px-6 py-10 text-2xl">
                                        {offline.OfflineEnrolled}
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-10 font-medium text-2xl  text-gray-900 whitespace-nowrap dark:text-white">
                                        Course rating
                                    </th>


                                    <td class="px-6 py-10 text-2xl">
                                        {offline.rating}
                                    </td>
                                </tr>




                            </tbody>


                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default DetailsOffline;