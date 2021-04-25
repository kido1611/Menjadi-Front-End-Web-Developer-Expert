const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_SMALL_URL: (pictureId) => `https://restaurant-api.dicoding.dev/images/small/${pictureId}`,
  BASE_IMAGE_MEDIUM_URL: (pictureId) => `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`,
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'resto-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
