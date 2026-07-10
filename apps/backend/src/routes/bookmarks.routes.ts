import { Router } from 'express';
import * as bookmarksController from '../controllers/bookmarks.controller';

const router = Router();

router.get('/', bookmarksController.getBookmarks);
router.get('/:id', bookmarksController.getBookmark);
router.post('/', bookmarksController.createBookmark);
router.patch('/:id', bookmarksController.updateBookmark);
router.delete('/:id', bookmarksController.deleteBookmark);

export default router;
