export type ProjectAPIResponse = {
  data: Array<{
    id: string;
    slug: string;
    image: string;
    order: number;
    title: string;
    excerpt: string;
    demo_url: string;
    created_at: string;
    github_url: string;
    tech_stack: string[];
    description: string;
    project_url?: string;
    blog_url?: string;
  }>;
  meta: {
    page: number;
    size: number;
    total: number;
    total_pages: number;
  };
};

export async function fetchProjects() {
  const apiKey = process.env.PROJECTS_API_KEY;
  const apiUrl = process.env.PROJECTS_API_URL;

  if (!apiKey || !apiUrl) {
    console.error("Missing PROJECTS_API_KEY or PROJECTS_API_URL in environment variables");
    return [];
  }

  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`API fetch failed: ${response.status} ${response.statusText} from ${apiUrl}`);
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const json: ProjectAPIResponse = await response.json();
    console.log(`Successfully fetched ${json.data?.length || 0} projects from API`);
    if (json.data && json.data.length > 0) {
      console.log('Sample project keys:', Object.keys(json.data[0]));
      console.log('Sample project project_url:', json.data[0].project_url);
    }
    return json.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
