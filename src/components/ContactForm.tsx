import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again.');
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
      </div>
      <div>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 border rounded h-32 dark:bg-gray-800 dark:border-gray-700"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;