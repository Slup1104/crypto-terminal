'use strict';

module.exports = {
	all: {
		files: [
			{
				nonull: true,
				expand: true,
				cwd: 'js',
				src: ['**/*.js'],
				dest: 'build/js',
				ext: '.min.js'
			},
			{
				nonull: true,
				src: 'node_modules/qrcode-generator/qrcode.js',
				dest: 'build/qrcode-generator/qrcode.min.js'
			}
		]
	},
	bitcoin: {
		options: {
			mangle: {
				except: ['BigInteger', 'ECPair', 'Point']
			}
		},
		src: 'build/bitcoin.js',
		dest: 'build/bitcoin.min.js'
	},
	bs58check: {
		src: 'build/bs58check.js',
		dest: 'build/bs58check.min.js'
	},
	buffer: {
		src: 'build/buffer.js',
		dest: 'build/buffer.min.js'
	},
	ecurve: {
		options: {
			mangle: {
				except: ['Point']
			}
		},
		src: 'build/ecurve.js',
		dest: 'build/ecurve.min.js'
	},
	querystring: {
		nonull: true,
		src: 'build/querystring.js',
		dest: 'build/querystring.min.js'
	},
	sjcl: {
		nonull: true,
		src: 'node_modules/sjcl/sjcl.js',
		dest: 'build/sjcl.min.js'
	}
};
