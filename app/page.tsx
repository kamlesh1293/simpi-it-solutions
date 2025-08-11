"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faAngular,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faGitAlt,
  faJava,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import {
  Code,
  Smartphone,
  Monitor,
  Globe,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  Users,
  Award,
  Briefcase,
  ArrowRight,
  Menu,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SimpiITSolutions() {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectType: '',
      description: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus('Sending...');

      try {
       const response = await fetch("/api/send-mail", {
       // const response = await fetch('https://simpi-it-solutions.great-site.net/send-mail.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        setStatus(result.success ? 'Message sent successfully!' : 'Failed to send message.');
      } catch (err) {
        setStatus('Something went wrong.');
      }
    };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-3">
              <Image src="/images/sis-logo.png" alt="Simpi IT Solutions Logo" height={70} width={70} className="rounded-lg" />
              <div>
                <span className="text-xl font-bold text-gray-900">Simpi IT Solutions</span>
                <p className="text-xs text-gray-600">Software Development Company</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="#technologies" className="text-gray-600 hover:text-gray-900 transition-colors">
                Technologies
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

            <Link href="#contact" className="flex items-center space-x-4">
              <Button>
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  🚀 8+ Years of Excellence
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {" "}
                    Software
                  </span>
                  <br />
                  Development
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your business with custom software solutions. Specializing in desktop, mobile, and web
                  applications using cutting-edge technologies like .NET, Java, Angular, and React.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  View Portfolio
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>On-time Delivery</span>
                </div>
              </div>
            </div>

            <div className="relative">
              
              <Image
                src="/images/sis-banner1.jpg?height=600&width=800"
                alt="Software Development Workspace"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/kamlesh.jpg?height=500&width=600"
                alt="Kamlesh Simpi - Software Engineer"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  About Us
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Meet Kamlesh Simpi</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 8 years of experience in software development, I am passionate about creating innovative
                  solutions that drive business growth. As the founder of Simpi IT Solutions, I specialize in delivering
                  high-quality software applications across multiple platforms.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">8+ Years</h3>
                    <p className="text-gray-600">Experience</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">50+</h3>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multiple</h3>
                    <p className="text-gray-600">Industries Served</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">100%</h3>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Web Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Modern, responsive web applications using Angular, React, and .NET MVC. Built for performance,
                  scalability, and user experience.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Database Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Mobile Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Cross-platform mobile applications that work seamlessly on iOS and Android. Native performance with
                  modern UI/UX design.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cross-Platform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Native Performance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>App Store Deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Desktop Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Powerful desktop applications using .NET and Java. Enterprise-grade solutions with robust
                  functionality and security.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Windows & Cross-Platform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Enterprise Security</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Custom Features</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Technologies
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tech Stack Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leveraging the latest technologies to build robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: ".NET", color: "bg-purple-100 text-purple-600", icon: faMicrosoft },
              { name: ".NET MVC", color: "bg-blue-100 text-blue-600", icon: faMicrosoft },
              { name: "Java", color: "bg-red-100 text-red-600", icon: faJava },
              { name: "Angular", color: "bg-red-100 text-red-600", icon: faAngular },
              { name: "React", color: "bg-blue-100 text-blue-600", icon: faReact },
              { name: "HTML5", color: "bg-orange-100 text-orange-600", icon: faHtml5 },
              { name: "JavaScript", color: "bg-yellow-100 text-yellow-600", icon: faCss3Alt },
              { name: "CSS3", color: "bg-blue-100 text-blue-600", icon: faJsSquare },
              { name: "SQL Server", color: "bg-gray-100 text-gray-600", icon: faDatabase },
              { name: "MySQL", color: "bg-blue-100 text-blue-600", icon: faDatabase },
              { name: "MongoDB", color: "bg-green-100 text-green-600", icon: faDatabase},
              { name: "Git", color: "bg-orange-100 text-orange-600", icon: faGitAlt },

            ].map((tech, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                   <FontAwesomeIcon icon={tech.icon} size="lg" className="text-blue-600" />  
                  </div>
                  <p className="font-semibold text-gray-900">{tech.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-white/20 text-white border-white/30">
                  Contact Us
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Build Something Amazing Together</h2>
                <p className="text-xl text-blue-100">
                  Ready to transform your ideas into powerful software solutions? Get in touch for a free consultation
                  and project quote.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="text-blue-100">
                      B/H, Tulsi, Kailash Nagar Society,
                      <br />
                      Nr Ambalalpark, Garnala,
                      <br />
                      Anand, Gujarat 388001
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-blue-100">kamleshsimpi1293@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-blue-100">+91 7405670644</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get Free Quote</CardTitle>
                <CardDescription>Tell us about your project and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Project Type</option>
                        <option>Web Application</option>
                        <option>Mobile Application</option>
                        <option>Desktop Application</option>
                        <option>Custom Software</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                      <textarea
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your project requirements..."
                        required
                      ></textarea>
                    </div>

                    <Button className="w-full" size="lg" type="submit">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    {status && <p className="text-sm text-center text-blue-600">{status}</p>}
                  </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/images/sis-logo.png" alt="Simpi IT Solutions Logo" height={70} width={70} />
                <div>
                  <span className="text-xl font-bold">Simpi IT Solutions</span>
                  <p className="text-xs text-gray-400">Software Development Company</p>
                </div>
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative software solutions. 8+ years of expertise in desktop, mobile,
                and web application development.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desktop Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Technologies</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    .NET & .NET MVC
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Java Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Angular & React
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    HTML5, CSS3, JavaScript
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Simpi IT Solutions. All rights reserved. | Designed & Developed by
              Kamlesh Simpi
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
