import { BlogPost } from "./models";

// In-memory mock database
class MockDatabase {
  private posts: BlogPost[] = [];
  private nextId = 1;

  constructor() {
    // Initialize with seed data
    this.seedData();
  }

  private seedData(): void {
    const seedPosts: Omit<BlogPost, "_id">[] = [
      {
        title: "Getting Started with Academic Research",
        content: `# Getting Started with Academic Research

Academic research can seem daunting at first, but with the right approach and mindset, it becomes an exciting journey of discovery. Here are some essential tips to help you begin your research career.

## Finding Your Research Niche

The first step in academic research is identifying what truly interests you. Consider:

- What problems in your field fascinate you?
- Which topics do you find yourself reading about in your spare time?
- What gaps exist in current literature?

## Developing Strong Research Questions

A good research question is:
- Specific and focused
- Feasible with available resources
- Relevant to your field
- Original or offering new perspectives

## Building Research Skills

Essential skills include:
- Critical thinking and analysis
- Literature review techniques
- Data collection and analysis methods
- Academic writing
- Time management

Remember, research is a marathon, not a sprint. Be patient with yourself and enjoy the process of learning and discovery.`,
        excerpt:
          "A comprehensive guide to beginning your journey in academic research, including tips for finding your niche and developing research questions.",
        slug: "getting-started-academic-research",
        tags: ["Research", "Academia", "Tips"],
        author: "Your Name",
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-01-15"),
        published: true,
        readTime: "5 min read",
      },
      {
        title: "Data Analysis Best Practices",
        content: `# Data Analysis Best Practices

Effective data analysis is crucial for producing reliable and meaningful research results. Here are some best practices that every researcher should follow.

## Data Quality and Preparation

Before diving into analysis, ensure your data is:

### Clean and Consistent
- Remove duplicates
- Handle missing values appropriately
- Standardize formats and units
- Validate data entry

### Well-Documented
- Maintain a data dictionary
- Document all transformations
- Keep track of data sources
- Record collection methods

## Statistical Considerations

### Choose Appropriate Methods
- Understand your data distribution
- Select tests based on your research questions
- Consider sample size requirements
- Account for multiple comparisons

### Validate Your Results
- Use cross-validation techniques
- Test assumptions
- Perform sensitivity analyses
- Replicate findings when possible

## Reproducibility

Make your analysis reproducible by:
- Using version control (Git)
- Writing clear, commented code
- Documenting your workflow
- Sharing data and code when appropriate

## Visualization and Communication

Good visualizations should:
- Tell a clear story
- Be accessible to your audience
- Follow design principles
- Include appropriate context

Remember, the goal is not just to analyze data, but to extract meaningful insights that advance knowledge in your field.`,
        excerpt:
          "Essential techniques and methodologies for conducting robust data analysis in academic research.",
        slug: "data-analysis-best-practices",
        tags: ["Data Science", "Research Methods", "Statistics"],
        author: "Your Name",
        createdAt: new Date("2024-01-10"),
        updatedAt: new Date("2024-01-10"),
        published: true,
        readTime: "8 min read",
      },
      {
        title: "Collaborative Research in the Digital Age",
        content: `# Collaborative Research in the Digital Age

The landscape of research collaboration has been transformed by digital technologies. Modern tools and platforms enable researchers to work together across geographical boundaries like never before.

## Digital Collaboration Tools

### Communication Platforms
- **Slack/Discord**: Real-time messaging and file sharing
- **Zoom/Teams**: Video conferencing and screen sharing
- **Email**: Still essential for formal communication

### Project Management
- **Trello/Asana**: Task tracking and project organization
- **GitHub**: Version control and code collaboration
- **Notion/Confluence**: Documentation and knowledge sharing

### Research-Specific Tools
- **Zotero/Mendeley**: Reference management and sharing
- **OSF (Open Science Framework)**: Research project management
- **Google Scholar**: Literature discovery and alerts
- **ORCID**: Researcher identification and profile management

## Best Practices for Remote Collaboration

### Clear Communication
- Establish communication protocols
- Use clear, concise language
- Document decisions and agreements
- Regular check-ins and updates

### Shared Resources
- Centralized file storage (Google Drive, Dropbox)
- Shared calendars and scheduling tools
- Common style guides and templates
- Accessible documentation

### Time Zone Considerations
- Be mindful of global team members
- Use scheduling tools that show multiple time zones
- Rotate meeting times when possible
- Allow for asynchronous work when appropriate

## Building Global Networks

### Virtual Conferences
- Increased accessibility and lower costs
- Broader participation opportunities
- Recorded sessions for later viewing
- Interactive features like chat and Q&A

### Online Communities
- Academic Twitter and LinkedIn
- ResearchGate and Academia.edu
- Field-specific forums and groups
- Virtual journal clubs and seminars

The digital age has democratized research collaboration, making it possible for researchers worldwide to work together on important problems. Embrace these tools while maintaining the human connections that make collaboration meaningful.`,
        excerpt:
          "How modern tools and platforms are transforming collaborative research and enabling global partnerships.",
        slug: "collaborative-research-digital-age",
        tags: ["Collaboration", "Technology", "Research"],
        author: "Your Name",
        createdAt: new Date("2024-01-05"),
        updatedAt: new Date("2024-01-05"),
        published: true,
        readTime: "6 min read",
      },
      {
        title: "The Future of AI in Academic Research",
        content: `# The Future of AI in Academic Research

Artificial Intelligence is rapidly transforming how we conduct research across disciplines. From literature reviews to data analysis, AI tools are becoming indispensable for modern researchers.

## Current Applications

### Literature Review and Discovery
- Automated paper recommendations
- Semantic search capabilities
- Citation analysis and mapping
- Trend identification in research fields

### Data Processing and Analysis
- Pattern recognition in large datasets
- Natural language processing for text analysis
- Image and signal processing
- Statistical modeling and prediction

### Research Writing and Communication
- Grammar and style checking
- Translation services
- Visualization generation
- Presentation assistance

## Emerging Opportunities

### Hypothesis Generation
AI systems can analyze vast amounts of literature and data to:
- Identify research gaps
- Suggest novel hypotheses
- Predict research outcomes
- Recommend experimental designs

### Automated Experimentation
- Robotic laboratory systems
- Automated data collection
- Real-time experiment optimization
- Quality control and validation

### Personalized Research Assistance
- Custom literature alerts
- Workflow optimization
- Time management suggestions
- Collaboration matching

## Challenges and Considerations

### Ethical Implications
- Bias in AI algorithms
- Transparency and explainability
- Data privacy and security
- Attribution and authorship

### Quality Control
- Validating AI-generated insights
- Maintaining research integrity
- Avoiding over-reliance on automation
- Preserving critical thinking skills

### Accessibility and Equity
- Ensuring broad access to AI tools
- Addressing the digital divide
- Supporting researchers in developing countries
- Training and education needs

## Looking Forward

The integration of AI in research will likely accelerate, but success will depend on:
- Thoughtful implementation
- Maintaining human oversight
- Addressing ethical concerns
- Ensuring equitable access

As researchers, we must embrace these tools while preserving the creativity, critical thinking, and ethical standards that define quality research.`,
        excerpt:
          "Exploring how artificial intelligence is transforming research methodologies and what the future holds for AI-assisted academic work.",
        slug: "future-ai-academic-research",
        tags: [
          "Artificial Intelligence",
          "Research Methods",
          "Future Technology",
        ],
        author: "Your Name",
        createdAt: new Date("2024-01-20"),
        updatedAt: new Date("2024-01-20"),
        published: true,
        readTime: "7 min read",
      },
    ];

    seedPosts.forEach((post) => {
      this.posts.push({
        ...post,
        _id: this.generateId(),
      });
      this.nextId++;
    });
  }

  private generateId(): string {
    return this.nextId.toString().padStart(24, "0"); // Mock ObjectId format
  }

  // Find all posts
  findAll(filter: Partial<BlogPost> = {}): BlogPost[] {
    return this.posts
      .filter((post) => {
        return Object.keys(filter).every((key) => {
          const filterValue = (filter as any)[key];
          const postValue = (post as any)[key];

          if (typeof filterValue === "object" && filterValue !== null) {
            // Handle complex queries (not implemented for simplicity)
            return true;
          }

          return postValue === filterValue;
        });
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }

  // Find one post
  findOne(filter: Partial<BlogPost>): BlogPost | null {
    return (
      this.posts.find((post) => {
        return Object.keys(filter).every((key) => {
          return (post as any)[key] === (filter as any)[key];
        });
      }) || null
    );
  }

  // Insert a new post
  insertOne(post: Omit<BlogPost, "_id">): { insertedId: string } {
    const newPost: BlogPost = {
      ...post,
      _id: this.generateId(),
    };

    this.posts.push(newPost);
    this.nextId++;

    return { insertedId: newPost._id as string };
  }

  // Update a post
  updateOne(
    filter: Partial<BlogPost>,
    update: { $set: Partial<BlogPost> },
  ): { matchedCount: number; modifiedCount: number } {
    const postIndex = this.posts.findIndex((post) => {
      return Object.keys(filter).every((key) => {
        return (post as any)[key] === (filter as any)[key];
      });
    });

    if (postIndex === -1) {
      return { matchedCount: 0, modifiedCount: 0 };
    }

    this.posts[postIndex] = {
      ...this.posts[postIndex],
      ...update.$set,
    };

    return { matchedCount: 1, modifiedCount: 1 };
  }

  // Delete a post
  deleteOne(filter: Partial<BlogPost>): { deletedCount: number } {
    const postIndex = this.posts.findIndex((post) => {
      return Object.keys(filter).every((key) => {
        return (post as any)[key] === (filter as any)[key];
      });
    });

    if (postIndex === -1) {
      return { deletedCount: 0 };
    }

    this.posts.splice(postIndex, 1);
    return { deletedCount: 1 };
  }
}

// Singleton instance
let mockDbInstance: MockDatabase | null = null;

export const getMockDB = (): MockDatabase => {
  if (!mockDbInstance) {
    mockDbInstance = new MockDatabase();
  }
  return mockDbInstance;
};

// Mock collection interface to match MongoDB API
export const mockCollection = {
  find: (filter: Partial<BlogPost> = {}) => ({
    sort: (sortObj: any) => ({
      toArray: () => Promise.resolve(getMockDB().findAll(filter)),
    }),
  }),
  findOne: (filter: Partial<BlogPost>) =>
    Promise.resolve(getMockDB().findOne(filter)),
  insertOne: (post: Omit<BlogPost, "_id">) =>
    Promise.resolve(getMockDB().insertOne(post)),
  updateOne: (filter: Partial<BlogPost>, update: { $set: Partial<BlogPost> }) =>
    Promise.resolve(getMockDB().updateOne(filter, update)),
  deleteOne: (filter: Partial<BlogPost>) =>
    Promise.resolve(getMockDB().deleteOne(filter)),
};
