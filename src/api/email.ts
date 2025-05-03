interface EmailData {
  name: string;
  email: string;
  message: string;
  grade_level?: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await fetch('http://contact.codeitforward.ai/send.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}; 