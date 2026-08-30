import { defineType, defineField } from 'sanity';

export default defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  fields: [
    defineField({
      name: "siteMeta",
      title: "Site Meta",
      type: "object",
      fields: [
        { name: "brandShort", title: "Brand Short Name", type: "string" },
        { name: "brandRest", title: "Brand Rest Name", type: "string" },
        { name: "copyrightName", title: "Copyright Name", type: "string" },
        { name: "copyrightYear", title: "Copyright Year", type: "string" },
      ],
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "Href / Link", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "profile",
      title: "Profile",
      type: "object",
      fields: [
        { name: "name", title: "Full Name", type: "string" },
        { name: "titles", title: "Professional Titles", type: "array", of: [{ type: "string" }] },
        { name: "email", title: "Email Address", type: "string" },
        { name: "phone", title: "Phone Number", type: "string" },
        { name: "location", title: "Location", type: "string" },
        {
          name: "photos",
          title: "Profile Photos",
          type: "array",
          of: [{ type: "image", options: { hotspot: true } }],
        },
        { name: "photoSlideIntervalMs", title: "Photo Slide Interval (ms)", type: "number" },
        {
          name: "cv",
          title: "CV Configuration",
          type: "object",
          fields: [
            {
              name: "mode",
              title: "CV Mode",
              type: "string",
              options: { list: ["auto", "manual"] },
            },
            { name: "manualPdfUrl", title: "Manual PDF File", type: "file" },
          ],
        },
        {
          name: "socialLinks",
          title: "Social Links",
          type: "array",
          of: [
            {
              type: "object",
              name: "socialLinkItem",
              fields: [
                { name: "label", title: "Platform Label", type: "string" },
                { name: "url", title: "URL", type: "url" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "paragraphs", title: "Paragraphs", type: "array", of: [{ type: "text" }] },
      ],
    }),
    defineField({
      name: "researchInterests",
      title: "Research Interests",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Research Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "researchItem",
              fields: [
                { name: "icon", title: "Icon Name", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "text" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Education Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "educationItem",
              fields: [
                { name: "period", title: "Period / Years", type: "string" },
                { name: "degree", title: "Degree", type: "string" },
                { name: "institution", title: "Institution", type: "string" },
                { name: "details", title: "Details / CGPA", type: "string" },
                { name: "logo", title: "Institution Logo", type: "image" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Experience Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "experienceItem",
              fields: [
                { name: "period", title: "Period", type: "string" },
                { name: "title", title: "Role Title", type: "string" },
                { name: "organization", title: "Organization", type: "string" },
                { name: "logo", title: "Logo Image", type: "image" },
                { name: "description", title: "Description", type: "text" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "publications",
      title: "Publications",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Publication Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "publicationItem",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "venue", title: "Venue Short", type: "string" },
                { name: "venueFull", title: "Venue Full Name", type: "string" },
                { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "eyebrow", title: "Eyebrow Text", type: "string" },
        {
          name: "categories",
          title: "Skill Categories",
          type: "array",
          of: [
            {
              type: "object",
              name: "skillCategory",
              fields: [
                { name: "icon", title: "Icon Name", type: "string" },
                { name: "title", title: "Category Title", type: "string" },
                { name: "items", title: "Skills List", type: "array", of: [{ type: "string" }] },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "projects",
      title: "Recent Projects",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Project Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "projectItem",
              fields: [
                { name: "title", title: "Project Title", type: "string" },
                { name: "badge", title: "Badge Text", type: "string" },
                { name: "status", title: "Status", type: "string" },
                { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
                { name: "image", title: "Project Image", type: "image", options: { hotspot: true } },
                { name: "aspectRatio", title: "Aspect Ratio", type: "string" },
                { name: "github", title: "GitHub Link", type: "url" },
                { name: "live", title: "Live Demo Link", type: "url" },
                { name: "bullets", title: "Key Points", type: "array", of: [{ type: "text" }] },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "previousProjects",
      title: "Previous Projects",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Previous Project Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "previousProjectItem",
              fields: [
                { name: "title", title: "Project Title", type: "string" },
                { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
                { name: "image", title: "Project Image", type: "image", options: { hotspot: true } },
                { name: "github", title: "GitHub Link", type: "url" },
                { name: "live", title: "Live Demo Link", type: "url" },
                { name: "bullets", title: "Key Points", type: "array", of: [{ type: "text" }] },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "ongoingResearch",
      title: "Ongoing Research",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Research Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "ongoingResearchItem",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "status", title: "Status", type: "string" },
                { name: "tag", title: "Tag / Category", type: "string" },
                { name: "description", title: "Description", type: "text" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "awards",
          title: "Awards & Scholarships",
          type: "object",
          fields: [
            { name: "heading", title: "Section Heading", type: "string" },
            {
              name: "items",
              title: "Awards Items",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "awardItem",
                  fields: [
                    { name: "icon", title: "Icon Name", type: "string" },
                    { name: "title", title: "Title", type: "string" },
                    { name: "meta", title: "Meta / Year", type: "string" },
                    { name: "description", title: "Description", type: "text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "extracurricular",
          title: "Extracurricular Activities",
          type: "object",
          fields: [
            { name: "heading", title: "Section Heading", type: "string" },
            {
              name: "items",
              title: "Extracurricular Items",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "extracurricularItem",
                  fields: [
                    { name: "icon", title: "Icon Name", type: "string" },
                    { name: "title", title: "Title", type: "string" },
                    { name: "meta", title: "Meta / Position", type: "string" },
                    { name: "description", title: "Description", type: "text" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow Text", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "FAQ Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "faqItem",
              fields: [
                { name: "question", title: "Question", type: "string" },
                { name: "answer", title: "Answer", type: "text" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "references",
      title: "References",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Reference Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "referenceItem",
              fields: [
                { name: "name", title: "Full Name", type: "string" },
                { name: "title", title: "Designation / Title", type: "string" },
                { name: "department", title: "Department", type: "string" },
                { name: "institution", title: "Institution", type: "string" },
                { name: "email", title: "Email", type: "string" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "message", title: "Message Text", type: "text" },
        { name: "email", title: "Email Address", type: "string" },
        { name: "whatsapp", title: "WhatsApp Number", type: "string" },
        { name: "location", title: "Location", type: "string" },
      ],
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        {
          name: "socialLinks",
          title: "Footer Social Links",
          type: "array",
          of: [
            {
              type: "object",
              name: "footerSocialLinkItem",
              fields: [
                { name: "label", title: "Platform Label", type: "string" },
                { name: "url", title: "URL", type: "url" },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
