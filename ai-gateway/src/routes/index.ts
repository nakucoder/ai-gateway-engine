import { Router } from 'express';
import axios from 'axios';
import authRoutes from './auth.routes';
import aiRoutes from './ai.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/ai', aiRoutes);

// --- NEW HEALTH CHECK ROUTE ---
router.get('/system-status', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/engine-check');
    res.json({
      gateway_status: "online",
      engine_status: response.data,
      connection: "verified"
    });
  } catch (error) {
    res.status(500).json({ 
      gateway_status: "online", 
      engine_status: "offline",
      message: "Check if Python Engine is running on Port 5000" 
    });
  }
});

export default router;