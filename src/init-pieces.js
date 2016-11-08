import black_bishop_image from '../public/images/pieces/black_bishop.svg';
import black_king_image from '../public/images/pieces/black_king.svg';
import black_knight_image from '../public/images/pieces/black_knight.svg';
import black_pawn_image from '../public/images/pieces/black_pawn.svg';
import black_queen_image from '../public/images/pieces/black_queen.svg';
import black_rook_image from '../public/images/pieces/black_rook.svg';
import white_bishop_image from '../public/images/pieces/white_bishop.svg';
import white_king_image from '../public/images/pieces/white_king.svg';
import white_knight_image from '../public/images/pieces/white_knight.svg';
import white_pawn_image from '../public/images/pieces/white_pawn.svg';
import white_queen_image from '../public/images/pieces/white_queen.svg';
import white_rook_image from '../public/images/pieces/white_rook.svg';

module.exports = {
	team1: {
		pawn_1: {
			type: 'pawn',
			position: 'a2',
			image: white_pawn_image
		},
		pawn_2: {
			type: 'pawn',
			position: 'b2',
			image: white_pawn_image
		},
		pawn_3: {
			type: 'pawn',
			position: 'c2',
			image: white_pawn_image
		},
		pawn_4: {
			type: 'pawn',
			position: 'd2',
			image: white_pawn_image
		},
		pawn_5: {
			type: 'pawn',
			position: 'e2',
			image: white_pawn_image
		},
		pawn_6: {
			type: 'pawn',
			position: 'f2',
			image: white_pawn_image
		},
		pawn_7: {
			type: 'pawn',
			position: 'g2',
			image: white_pawn_image
		},
		pawn_8: {
			type: 'pawn',
			position: 'h2',
			image: white_pawn_image
		},

		rook_1: {
			type: 'rook',
			position: 'a1',
			image: white_rook_image
		},
		bishop_1: {
			type: 'bishop',
			position: 'b1',
			image: white_bishop_image
		},
		knight_1: {
			type: 'knight',
			position: 'c1',
			image: white_knight_image
		},
		queen_1: {
			type: 'queen',
			position: 'd1',
			image: white_queen_image
		},
		king_1: {
			type: 'king',
			position: 'e1',
			image: white_king_image
		},
		knight_2: {
			type: 'knight',
			position: 'f1',
			image: white_knight_image
		},
		bishop_2: {
			type: 'bishop',
			position: 'g1',
			image: white_bishop_image
		},
		rook_2: {
			type: 'rook',
			position: 'h1',
			image: white_rook_image
		}
	},

	team2: {
		pawn_1: {
			type: 'pawn',
			position: 'a7',
			image: black_pawn_image
		},
		pawn_2: {
			type: 'pawn',
			position: 'b7',
			image: black_pawn_image
		},
		pawn_3: {
			type: 'pawn',
			position: 'c7',
			image: black_pawn_image
		},
		pawn_4: {
			type: 'pawn',
			position: 'd7',
			image: black_pawn_image
		},
		pawn_5: {
			type: 'pawn',
			position: 'e7',
			image: black_pawn_image
		},
		pawn_6: {
			type: 'pawn',
			position: 'f7',
			image: black_pawn_image
		},
		pawn_7: {
			type: 'pawn',
			position: 'g7',
			image: black_pawn_image
		},
		pawn_8: {
			type: 'pawn',
			position: 'h7',
			image: black_pawn_image
		},

		rook_1: {
			type: 'rook',
			position: 'a8',
			image: black_rook_image
		},
		bishop_1: {
			type: 'bishop',
			position: 'b8',
			image: black_bishop_image
		},
		knight_1: {
			type: 'knight',
			position: 'c8',
			image: black_knight_image
		},
		queen_1: {
			type: 'queen',
			position: 'd8',
			image: black_queen_image
		},
		king_1: {
			type: 'king',
			position: 'e8',
			image: black_king_image
		},
		knight_2: {
			type: 'knight',
			position: 'f8',
			image: black_knight_image
		},
		bishop_2: {
			type: 'bishop',
			position: 'g8',
			image: black_bishop_image
		},
		rook_2: {
			type: 'rook',
			position: 'h8',
			image: black_rook_image
		}
	}
	
};
