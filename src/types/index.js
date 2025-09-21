// Type definitions converted to JSDoc comments for reference

/**
 * @typedef {Object} SkillType
 * @property {number} id
 * @property {string} name
 * @property {'frontend' | 'backend' | 'design' | 'other'} category
 * @property {number} level - 1-5
 */

/**
 * @typedef {Object} ProjectType
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string[]} technologies
 * @property {string} [liveUrl]
 * @property {string} [githubUrl]
 * @property {boolean} featured
 * @property {number} year
 */

/**
 * @typedef {Object} ExperienceType
 * @property {number} id
 * @property {string} title
 * @property {string} company
 * @property {string} location
 * @property {string} startDate - Format: 'YYYY-MM'
 * @property {string | null} endDate - null means 'Present'
 * @property {string[]} description
 * @property {string[]} technologies
 * @property {boolean} isCurrent
 */

/**
 * @typedef {Object} ThemeContextType
 * @property {'dark' | 'light'} theme
 * @property {() => void} toggleTheme
 */

export {};