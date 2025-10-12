import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import profileImage from '../images/profile.jpg';


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

const Calendar = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const Clock = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
    </svg>
);

const Users = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const Gift = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="20,12 20,22 4,22 4,12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
);

const WeddingCard: React.FC = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4">
            <div className="w-full max-w-6xl mx-auto">
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                    {/* Header Section with Sidebar */}
                    <div className="wedding-gradient text-white relative overflow-hidden min-h-[400px]">
                        {/* Background Image - Hidden on laptop screens, visible on mobile */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
                            style={{
                                backgroundImage: `url(${profileImage})`
                            }}
                        ></div>

                        {/* Remove or reduce the dark overlay to see the image better */}
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Sidebar - Fixed positioning to prevent cutoff */}
                        <div className="absolute left-0 top-0 h-full w-16 md:w-20 bg-white/10 backdrop-blur-sm border-r border-white/20 flex flex-col items-center py-6 md:py-8 space-y-4 md:space-y-6 z-10">
                            {/* Sidebar Navigation Items */}
                            <div className="flex flex-col items-center space-y-3 md:space-y-4">
                                <button
                                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110 relative group"
                                    title="View Images"
                                >
                                    <Heart className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                                    <span className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                                        View Images
                                    </span>
                                </button>

                                <button
                                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110 relative group"
                                    title="Wedding Events"
                                >
                                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                                    <span className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                                        Wedding Events
                                    </span>
                                </button>

                                <button
                                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110 relative group"
                                    onClick={() => window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.383394659039!2d74.85170878538254!3d13.348536944330636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca59f4a0bad7f%3A0x13987319ccda0198!2sMadhava%20Mangala%20Sabha%20Bhavana!5e0!3m2!1sen!2sin!4v1760248826397!5m2!1sen!2sin', '_blank')}
                                    title="Location"
                                >
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                                    <span className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                                        Location
                                    </span>
                                </button>

                                <button
                                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110 relative group"
                                    onClick={() => setShowContact(true)}
                                    title="Contact Us"
                                >
                                    <Users className="w-4 h-4 md:w-5 md:h-5" />
                                    <span className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                                        Contact Us
                                    </span>
                                </button>
                            </div>

                            {/* Sidebar Bottom */}
                            <div className="mt-auto">
                                <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 rounded-full"></div>
                            </div>
                        </div>

                        {/* Main Header Content - Responsive margin */}
                        <div className="ml-16 md:ml-20 py-12 md:py-16 px-4 md:px-8 text-center relative z-10">
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 md:right-8 w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 rounded-full"></div>
                            <div className="absolute bottom-4 right-2 md:right-4 w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 rounded-full"></div>
                            <div className="absolute bottom-8 right-4 md:right-8 w-4 h-4 md:w-6 md:h-6 border-2 border-white/30 rounded-full"></div>

                            <div className="heart-beat inline-block mb-4 md:mb-6">
                                <Heart className="w-10 h-10 md:w-12 md:h-12 text-white/90" fill="currentColor" />
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-shadow mb-4">
                                Sandeep & Nisha
                            </h1>

                            <p className="text-lg md:text-xl lg:text-2xl font-light">
                                are getting married!
                            </p>
                        </div>
                    </div>

                    {/* Contact Page Modal */}
                    {showContact && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-serif text-gray-800">Contact Information</h2>
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
                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-rose-50 to-pink-50">
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-xl font-semibold text-rose-800 mb-3">Groom's Family</h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-800">Sandeep's Father</p>
                                                <p className="text-lg text-gray-600">+91 98765 43210</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Card 2 - Bride's Family */}
                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50">
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-xl font-semibold text-purple-800 mb-3">Bride's Family</h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-800">Nisha's Father</p>
                                                <p className="text-lg text-gray-600">+91 98765 43211</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Card 3 - Wedding Coordinator */}
                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-xl font-semibold text-green-800 mb-3">Wedding Coordinator</h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-800">Event Manager</p>
                                                <p className="text-lg text-gray-600">+91 98765 43212</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Card 4 - Venue Contact */}
                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50">
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-xl font-semibold text-orange-800 mb-3">Venue Contact</h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-800">Madhava Mangala Sabha Bhavana</p>
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
                    <CardContent className="p-8 md:p-12">
                        <div className="text-center mb-12">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                Together with our families, we invite you to celebrate our special day as we begin our journey as one.
                            </p>
                        </div>

                        {/* Wedding Events */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Mehendi Event */}
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-serif text-orange-800 flex items-center justify-center gap-2">
                                        <Calendar className="w-6 h-6" />
                                        Mehendi Ceremony
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-xl font-semibold text-gray-800 mb-2">Monday, February 19th, 2024</p>
                                    <div className="flex items-center justify-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <span>6:00 PM</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Wedding Day */}
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-rose-50 to-pink-50">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-serif text-rose-800 flex items-center justify-center gap-2">
                                        <Calendar className="w-6 h-6" />
                                        Wedding Day
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-xl font-semibold text-gray-800 mb-2">Saturday, February 22nd, 2024</p>
                                    <div className="flex items-center justify-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <span>12.15 PM</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Venue */}
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50 mb-12">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl font-serif text-purple-800 flex items-center justify-center gap-2">
                                    <MapPin className="w-6 h-6" />
                                    Venue
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-xl font-semibold text-gray-800 mb-2">Madhava Mangala Sabha Bhavana</p>
                                <p className="text-gray-600">Banquet hall in Hiriadka, Karnataka</p>
                            </CardContent>
                        </Card>

                        {/* RSVP Section */}
                        <div className="text-center mb-8">
                            <Separator className="my-8 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

                            <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8">
                                <h3 className="text-2xl font-serif text-gray-800 mb-4">
                                    Please RSVP by May 1st, 2024
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    We can't wait to celebrate with you!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        size="lg"
                                        className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <Users className="w-5 h-5 mr-2" />
                                        RSVP Now
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-rose-300 text-rose-700 hover:bg-rose-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <Gift className="w-5 h-5 mr-2" />
                                        Gift Registry
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
