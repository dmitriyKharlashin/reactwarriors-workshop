// export const API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";
export const API_KEY_3 = "ea48dbd9c2b499cf68604c5695bc2b8c";

// export const API_KEY_4 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjRjYTRmM2E5NzUwZGE1MzQ1MDY0NmNlZDMxMjM5NyIsInN1YiI6IjVhYzlmNWRkOTI1MTQxNjJhZTA1Njk0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fc4f9DVB6pFWh6hIjYe0NCC4pImdmNzDIfi_3Nb3tC4";
export const API_KEY_4 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTQ4ZGJkOWMyYjQ5OWNmNjg2MDRjNTY5NWJjMmI4YyIsInN1YiI6IjVhZTY0Y2E4YzNhMzY4MTM1NTAwNTNiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ARbhHeEApkQ4K9vMmFORW1n8T4qbMsMCXnuOJfbSwGA";

export const API_MOVIE_DB_URL = 'https://api.themoviedb.org/3/';
export const API_MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
export const API_USER_AVATAR_URL = 'https://secure.gravatar.com/avatar/';

export const MOVIE_OVERVIEW_LANG = 'en-US';
export const MOVIES_RATE_REGION = 'ua';

export const NOW_PLAYING_MOVIES_TYPE = 'now_playing';
export const POPULAR_MOVIES_TYPE = 'popular';
export const UPCOMING_MOVIES_TYPE = 'upcoming';

export function prepareGetParams(paramsObject) {

  const queryParamsString = Object.keys(paramsObject).map((parameterKey) => {
    return encodeURIComponent(parameterKey) + "=" + encodeURIComponent(paramsObject[parameterKey]);
  }).join('&');

  return queryParamsString;
}