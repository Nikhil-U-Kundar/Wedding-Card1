import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import profileImage from '../images/profile.jpg';
import coverImage from '../images/cover.jpg';
import kalashImage from '../images/kalash.png';


const Heart = ({ className, fill }: { className?: string; fill?: string }) => (
    <svg className={className} fill={fill} viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const MapPin = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const Clock = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
    </svg>
);

const WeddingCard: React.FC = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4">
            <div className="w-full max-w-6xl mx-auto">
                <Card className="overflow-hidden shadow-2xl border-0 !bg-white md:bg-white/90 backdrop-blur-sm">
                    {/* Header Section with Sidebar */}
                    <div className="bg-white lg:bg-gradient-to-br lg:from-rose-100 lg:to-pink-100 text-gray-900 lg:text-gray-900 relative overflow-hidden min-h-[400px]">
                        {/* Background Image - Hidden on laptop screens, visible on mobile */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
                            style={{
                                backgroundImage: `url(${coverImage})`
                            }}
                        ></div>

                        {/* Remove or reduce the dark overlay to see the image better */}
                        <div className="absolute inset-0 bg-white/15 lg:bg-black/15"></div>


                        {/* Main Header Content - Responsive margin */}
                        <div className="ml-3 md:ml-20 py-12 md:py-16 px-4 md:px-8 text-center relative z-10 mt-16">
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 md:right-8 w-6 h-6 md:w-8 md:h-8 border-2 border-gray-300 lg:border-white/30 rounded-full"></div>
                            <div className="absolute bottom-4 right-2 md:right-4 w-6 h-6 md:w-8 md:h-8 border-2 border-gray-300 lg:border-white/30 rounded-full"></div>
                            <div className="absolute bottom-8 right-4 md:right-8 w-4 h-4 md:w-6 md:h-6 border-2 border-gray-300 lg:border-white/30 rounded-full"></div>

                            <div className="heart-beat inline-block mb-4 md:mb-6">
                                <Heart className="w-10 h-10 md:w-12 md:h-12 text-rose-500 lg:text-white/90" fill="currentColor" />
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-cursive font-bold text-shadow mb-4 whitespace-nowrap">
                                Nisha & Sharath
                            </h1>

                            <p className="text-2xl md:text-3xl lg:text-4xl font-cursive font-bold">
                                are getting married!
                            </p>
                        </div>
                    </div>

                    {/* Contact Page Modal */}
                    {showContact && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-cursive text-gray-800">Contact Information</h2>
                                    <button
                                        onClick={() => setShowContact(false)}
                                        className="text-gray-500 hover:text-gray-700 text-2xl"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Call for Directions */}
                                <div className="text-center mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Directions?</h3>
                                    <p className="text-gray-600">Please call any of the numbers below for assistance</p>
                                </div>

                                {/* Contact Cards */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Card 1 - Groom's Family */}
                                    <Card className="border-0 shadow-lg !bg-gradient-to-br !from-rose-50 !to-pink-50">
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-xl font-semibold text-rose-800 mb-3">Groom's Family</h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-800">Sudhakara Kulal</p>
                                                <p className="text-lg text-gray-600">+91 98765 43210</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Card 2 - Bride's Family */}
                                    <Card className="border-0 shadow-lg !bg-gradient-to-br !from-purple-50 !to-indigo-50">
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-xl font-semibold text-purple-800 mb-3">Bride's Family</h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-800">Narayana Kulal</p>
                                                <p className="text-lg text-gray-600">+91 98765 43211</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Card 3 - Wedding Coordinator */}
                                    <Card className="border-0 shadow-lg !bg-gradient-to-br !from-green-50 !to-emerald-50">
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-xl font-semibold text-green-800 mb-3">Wedding Coordinator</h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-800">Event Manager</p>
                                                <p className="text-lg text-gray-600">+91 98765 43212</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Card 4 - Venue Contact */}
                                    <Card className="border-0 shadow-lg !bg-gradient-to-br !from-orange-50 !to-yellow-50">
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-xl font-semibold text-orange-800 mb-3">Venue Contact</h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-800">Shree Narayanaguru Sabha Bhavana</p>
                                                <p className="text-lg text-gray-600">+91 98765 43213</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Quick Actions */}
                                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
                                        onClick={() => window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.383394659039!2d74.85170878538254!3d13.348536944330636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca59f4a0bad7f%3A0x13987319ccda0198!2sMadhava%20Mangala%20Sabha%20Bhavana!5e0!3m2!1sen!2sin!4v1760248826397!5m2!1sen!2sin', '_blank')}
                                    >
                                        <MapPin className="w-4 h-4 mr-2" />
                                        Open in Maps
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-blue-300 text-blue-700 hover:bg-blue-50 px-6 py-2 rounded-full"
                                        onClick={() => setShowContact(false)}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Rest of the component remains the same */}
                    <CardContent className="p-8 md:p-12 mt-7">
                        <div className="text-center mb-12">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-cursive">
                                Together with our families, we invite you to celebrate our special day as we begin our journey as one.
                            </p>
                        </div>

                        {/* How We Met Section */}
                        <div className="mb-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-cursive font-bold text-rose-800 mb-6">How We Met</h2>
                                <div className="flex flex-col md:flex-row items-center gap-8 bg-white/50 p-6 rounded-2xl border border-rose-100 shadow-sm">
                                    <div className="w-full md:w-1/2 aspect-video md:aspect-square relative overflow-hidden rounded-xl">
                                        <img
                                            src={profileImage}
                                            alt="Couple"
                                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 text-left space-y-4">
                                        <p className="text-lg text-gray-700 leading-relaxed font-cursive">
                                            It started with a simple coffee meet that turned into hours of conversation. We realized we shared not just jokes, but dreams and values.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed font-cursive">
                                            From long drives to quiet moments, our bond grew stronger with every passing day. Today, we are best friends ready to become partners for life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Wedding Events */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <Card className="border-0 shadow-lg !bg-gradient-to-br !from-rose-50 !to-pink-50">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-3xl font-cursive text-rose-800 flex items-center justify-center gap-3">
                                        Wedding Day
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center p-6 md:p-8">
                                    <p className="text-2xl text-gray-800 mb-8 italic">Sunday, February 22nd, 2026</p>

                                    <div className="grid md:grid-cols-2 gap-8 items-start relative">
                                        {/* Vertical Separator for Desktop */}
                                        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-rose-300 to-transparent -ml-[0.5px]"></div>

                                        {/* Muhurtham */}
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="bg-rose-100 p-3 rounded-full text-rose-600 mb-1">
                                                <img src={kalashImage} className="w-12 h-12 object-contain" alt="Kalash" />
                                            </div>
                                            <h3 className="text-xl font-cursive text-rose-800 font-bold">Muhurtham</h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-center gap-2 text-gray-700 bg-white/50 py-1 px-3 rounded-full inline-flex">
                                                    <Clock className="w-2 h-4" />
                                                    <span className="font-medium">10:05 AM (Mesha Lagnam)</span>
                                                </div>
                                                <div className="flex flex-col items-center gap-1 text-gray-600 mt-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-semibold">Kateel Sri Durgaparameshwari Temple</span>
                                                    </div>
                                                    <span className="text-sm">Kateel</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Horizontal Separator for Mobile */}
                                        <div className="md:hidden w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-2"></div>

                                        {/* Reception */}
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="bg-orange-100 p-3 rounded-full text-orange-600 mb-1">
                                                <img src="https://api.iconify.design/noto:clinking-glasses.svg" className="w-8 h-8" alt="Cheers" />
                                            </div>
                                            <h3 className="text-xl font-cursive text-orange-800 font-bold">Reception</h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-center gap-2 text-gray-700 bg-white/50 py-1 px-3 rounded-full inline-flex">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="font-medium">12:30 PM Onwards</span>
                                                </div>
                                                <div className="flex flex-col items-center gap-1 text-gray-600 mt-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-semibold">Shree Narayanaguru Sabha Bhavana</span>
                                                    </div>
                                                    <span className="text-sm">Onthibettu, Hiriyadaka</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>



                        {/* Location Section */}
                        <div className="text-center mb-12">
                            <div className="my-8 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

                            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
                                <p className="text-gray-700 mb-6 font-medium italic">
                                    We can't wait to celebrate with you! Click the buttons below to find the venue locations.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-rose-600 hover:bg-rose-700 text-white gap-2 rounded-full px-8"
                                        onClick={() => window.open('https://maps.app.goo.gl/5RABFi7JFYCQgyFe7', '_blank')}
                                    >
                                        <MapPin className="w-4 h-4" />
                                        Temple Location
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-rose-200 text-rose-700 hover:bg-rose-50 gap-2 rounded-full px-8"
                                        onClick={() => window.open('https://maps.app.goo.gl/P33ZWdYzxne7ZLXAA', '_blank')}
                                    >
                                        <MapPin className="w-4 h-4" />
                                        Reception Location
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center text-gray-500">
                            <p className="text-sm">
                                "Two souls, one heart, forever together"
                            </p>
                        </div>
                        {/* Designer Credit */}
                        <div className="text-center text-gray-400 mt-4">
                            <p className="text-xs">
                                Designed by NK
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default WeddingCard;
