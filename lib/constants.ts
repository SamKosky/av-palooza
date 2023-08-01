/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://av-palooza.vercel.app';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const BRAND_NAME = 'AV';
export const SITE_NAME_MULTILINE = ['AV', 'Palooza'];
export const SITE_NAME = 'AV Palooza';
export const META_DESCRIPTION = '';
export const SITE_DESCRIPTION = "A journey into the future of Australia's HealthTech ecosystem.";
export const DATE = '21 September 2023';
export const SHORT_DATE = 'Sep 21 - 5:00pm AEST';
export const FULL_DATE = 'Sep 21st 5pm Australian Eastern Standard Time (GMT+10)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

export const LEGAL_URL = "";
export const COPYRIGHT_HOLDER = "Aginic Ventures";

export const CODE_OF_CONDUCT = 'https://aginicventures.notion.site/Code-of-Conduct-48557a4e6d454b0286a40bf598dbe02e?pvs=4';
export const REPO = 'https://github.com/SamKosky/av-palooza';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Live Stage',
    route: '/stage/a'
  },
  {
    name: 'Mantel Stage',
    route: '/stage/c'
  },
  {
    name: 'Venture Stage',
    route: '/stage/m'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  // {
  //   name: 'Jobs',
  //   route: '/jobs'
  // }
];

export type TicketGenerationState = 'default' | 'loading';
