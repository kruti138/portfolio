import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || 'portfolio';
const collectionName = process.env.MONGODB_COLLECTION || 'contactMessages';

let cachedClient;

async function getCollection() {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable.');
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await cachedClient.connect();
  }

  return cachedClient.db(dbName).collection(collectionName);
}

function readBody(body) {
  if (!body) {
    return {};
  }

  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }

  return body;
}

function validateSubmission(data) {
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const subject = typeof data.subject === 'string' ? data.subject.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';

  if (!name || !email || !subject || !message) {
    return { error: 'Please fill out every field before sending your message.' };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return { error: 'Please enter a valid email address.' };
  }

  return {
    value: {
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    },
  };
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  try {
    const payload = readBody(request.body);
    const result = validateSubmission(payload);

    if (result.error) {
      return response.status(400).json({ message: result.error });
    }

    const collection = await getCollection();
    const insertResult = await collection.insertOne(result.value);

    return response.status(201).json({
      message: 'Message saved successfully.',
      id: insertResult.insertedId,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unable to save your message right now.';

    return response.status(500).json({ message });
  }
}
