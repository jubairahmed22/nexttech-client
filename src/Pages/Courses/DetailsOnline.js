import React from 'react';

const DetailsOnline = ({ allCourses }) => {
    return (
        <div>
            <div>

                {
                    allCourses.map(online =>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-10 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                                            Mode:
                                        </th>


                                        <td class="px-6 py-10 text-2xl">
                                            Online
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-10 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                                            Course Duration:
                                        </th>


                                        <td class="px-6 py-10 text-2xl">
                                            {online.OnlineCourseDuration}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-10 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                                            Enrolled:
                                        </th>


                                        <td class="px-6 py-10 text-2xl">
                                            {online.OnlineEnrolled}
                                        </td>
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800">
                                        <th scope="row" class="px-6 py-10 font-medium text-2xl  text-gray-900 whitespace-nowrap dark:text-white">
                                            Course rating
                                        </th>


                                        <td class="px-6 py-10 text-2xl">
                                            {online.rating}
                                        </td>
                                    </tr>




                                </tbody>


                            </table>
                        </div>

                    )
                }


            </div>
        </div>
    );
};

export default DetailsOnline;