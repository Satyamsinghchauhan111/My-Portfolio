import { useEffect, useState } from "react";
import UserSkeleton from "./UserSkeleton";

type UsersPreviewProps = {
  isFull: boolean;
};

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

const USERS_API = "https://jsonplaceholder.typicode.com/users";

export const UsersPreview: React.FC<UsersPreviewProps> = ({ isFull }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!isFull || hasLoaded) return;

    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(USERS_API, {
          signal: controller.signal,
        });
        const data = await res.json();
        setUsers(data.slice(0, 10)); // 👈 only 3–4 users
        setHasLoaded(true);
      } catch (err) {
        if ((err as any).name !== "AbortError") {
          console.error("Failed to load users");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, [isFull, hasLoaded]);

  if (!isFull) return null;

  return (
    <div className="mt-6 space-y-3">
      {loading
        ? Array.from({ length: 7 }).map((_, i) => <UserSkeleton key={i} />)
        : users.map((user) => (
            <div
              key={user.id}
              className="flex animate-slide-in-right items-center justify-between rounded-xl bg-stone-200 px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {user.name}
                </p>
                <p className="text-xs text-slate-500">{user.email}</p>
              </div>
              <span className="text-xs text-slate-400">
                {user.company.name}
              </span>
            </div>
          ))}
    </div>
  );
};
